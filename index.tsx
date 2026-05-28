import React, { useState, useEffect } from 'react';
import { createCliRenderer } from '@opentui/core';
import { createRoot, useKeyboard } from '@opentui/react';
import { POKEMON_DATA } from './src/pokemonData';
import { parsePokemonSprite } from './src/spriteParser';

function PokedexApp() {
  // 1. TRACK HEIGHT AND WINDOWING STATE
  const [terminalHeight, setTerminalHeight] = useState(process.stdout.rows || 24);
  const MAX_VISIBLE_ITEMS = Math.max(5, terminalHeight - 8); 

  const [scrollOffset, setScrollOffset] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [currentSprite, setCurrentSprite] = useState<string[][] | null>(null);
  const currentPokemon = POKEMON_DATA[selectedIndex];

  useEffect(() => {
    const handleResize = () => setTerminalHeight(process.stdout.rows);
    process.stdout.on('resize', handleResize);
    return () => {
      process.stdout.off('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    parsePokemonSprite(selectedIndex)
      .then((sprite) => {
        if (isMounted) setCurrentSprite(sprite);
      })
      .catch(() => {
        if (isMounted) setCurrentSprite(null);
      });
    return () => { isMounted = false; };
  }, [selectedIndex]);

  // 2. UPGRADED KEYBOARD HOOK: MOVES THE HIGHLIGHT AND THE SCROLL WINDOW
  useKeyboard((event: any) => {
    const key = event.key || event.name;
    
    if ((key === 'ArrowDown' || key === 'down') && selectedIndex < POKEMON_DATA.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      
      // If cursor hits the bottom of the visible window, slide the window down
      if (nextIndex >= scrollOffset + MAX_VISIBLE_ITEMS) {
        setScrollOffset(scrollOffset + 1);
      }
    }
    if ((key === 'ArrowUp' || key === 'up') && selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      
      // If cursor hits the top of the visible window, slide the window up
      if (prevIndex < scrollOffset) {
        setScrollOffset(prevIndex);
      }
    }
    if (key === 'Escape' || key === 'escape') {
      process.exit(0);
    }
  });

  const RenderSprite = () => {
    if (!currentSprite) return <text fg="#908caa">Loading Sprite Asset...</text>;

    return (
      <box flexDirection="column" alignItems="center">
        {currentSprite.map((row, y) => {
          if (y % 2 !== 0) return null; 
          return (
            <box key={y} flexDirection="row">
              {row.map((pixelColor, x) => {
                const topColor = pixelColor === "transparent" ? "#191724" : pixelColor;
                const bottomColor = (currentSprite[y + 1] && currentSprite[y + 1][x] !== "transparent") 
                  ? currentSprite[y + 1][x] 
                  : "#191724";
                
                return <text key={x} fg={bottomColor} bg={topColor}>▄</text>;
              })} 
            </box>
          );
        })}
      </box>
    );
  };

  return (
    <box flexDirection="row" width="100%" height="100%" bg="#191724">
      
      {/* ── LEFT PANEL ── */}
      <box 
        width={68} 
        height="100%"
        borderStyle="rounded"
        borderColor="#f6c177"
        flexDirection="column"
        padding={1}
        marginRight={1}
      >
        <text fg="#ebbcba" bold> ── POKÉDEX INSPECTOR ── </text>
        
        <box 
          height={32} 
          borderStyle="single" 
          borderColor="#31748f" 
          marginTop={1}
          alignItems="center"
          justifyContent="center"
        >
          <RenderSprite />
        </box>

        <box marginTop={1} flexDirection="column">
          <text bold fg="#e0def4">
            #{String(currentPokemon.id).padStart(3, '0')} {currentPokemon.name.toUpperCase()}
          </text>
          <box flexDirection="row" marginTop={1}>
            {currentPokemon.types.map(type => (
              <box key={type} marginRight={1}>
                <text bg="#2a2837" fg="#c4a7e7"> {type} </text>
              </box>
            ))}
          </box>
          <box marginTop={1} width={64}>
            <text fg="#908caa">{currentPokemon.description}</text>
          </box>
          <box marginTop={1} flexDirection="row">
            <box flexDirection="column" width={20}>
              <text fg="#6e6a86">HEIGHT</text>
              <text fg="#e0def4">{currentPokemon.height}</text>
            </box>
            <box flexDirection="column" width={20}>
              <text fg="#6e6a86">WEIGHT</text>
              <text fg="#e0def4">{currentPokemon.weight}</text>
            </box>
          </box>
          <box marginTop={1} flexDirection="column">
            <text fg="#6e6a86">ABILITIES</text>
            <box flexDirection="row">
              {currentPokemon.abilities.map((ability, idx) => (
                <text key={ability} fg="#e0def4">
                  {ability}{idx < currentPokemon.abilities.length - 1 ? " / " : ""}
                </text>
              ))}
            </box>
          </box>
          <box marginTop={1} flexDirection="column">
            <text fg="#6e6a86">EVOLUTION CHAIN</text>
            <box flexDirection="row" marginTop={1}>
              {currentPokemon.evolutionChain.map((evo, idx) => {
                const isCurrent = evo.name === currentPokemon.name;
                return (
                  <box key={evo.name} flexDirection="row">
                    {idx > 0 && <text fg="#ebbcba"> ──[{evo.level}]➔ </text>}
                    <text fg={isCurrent ? "#f6c177" : "#e0def4"} bold={isCurrent}>
                      {evo.name.toUpperCase()}
                    </text>
                  </box>
                );
              })}
            </box>
          </box>
        </box>
      </box>

      {/* ── RIGHT PANEL ── */}
      <box 
        flexGrow={1} 
        height="100%"
        borderStyle="rounded" 
        borderColor="#6e6a86" 
        flexDirection="column" 
        padding={1}
      >
        <text fg="#9ccfd8" bold> INDEX LIST </text>
        
        <box flexDirection="row" width="100%" marginTop={1} paddingX={1}>
          <text fg="#6e6a86">  ID / NAME</text>
          <box flexGrow={1} />
          <text fg="#6e6a86">TYPE(S)  </text>
        </box>
        <text fg="#6e6a86"> ───────────────────────────────────────────────────────────────── </text>

        {/* 3. STANDARD BOX RENDERING THE SLICED ARRAY */}
        <box flexGrow={1} flexDirection="column">
          {POKEMON_DATA.slice(scrollOffset, scrollOffset + MAX_VISIBLE_ITEMS).map((pokemon, relativeIndex) => {
            const actualIndex = scrollOffset + relativeIndex;
            const isSelected = actualIndex === selectedIndex;
            return (
              <box 
                key={pokemon.name}
                height={1}
                flexDirection="row"
                width="100%"
                bg={isSelected ? "#2a273f" : "transparent"}
                paddingX={1}
              >
                <text 
                  fg={isSelected ? "#e0def4" : "#908caa"} 
                  bold={isSelected}
                >
                  {isSelected ? "➔ " : "  "} #{String(pokemon.id).padStart(3, '0')} {pokemon.name.toUpperCase()}
                </text>
                
                <box flexGrow={1} />

                <box flexDirection="row">
                  {pokemon.types.map(t => (
                    <text 
                      key={t} 
                      fg={isSelected ? "#f6c177" : "#6e6a86"}
                      marginLeft={1}
                    >
                      {t}
                    </text>
                  ))}
                </box>
              </box>
            );
          })}
        </box>
      </box>
    </box>
  );
}

const renderer = await createCliRenderer({ 
  exitOnCtrlC: true,
  fullscreen: true 
});
createRoot(renderer).render(<PokedexApp />);