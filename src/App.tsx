import { GingerbreadHouse } from './components/GingerbreadHouse'
import { Snowfall } from './components/Snowfall'

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8 overflow-hidden relative">
      <Snowfall />
      
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight drop-shadow-lg">
          Sweet Holiday Home
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 font-medium">
          A delightful gingerbread house, crafted with care
        </p>
        
        <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-border/50">
          <GingerbreadHouse />
          
          <p className="mt-8 text-foreground/80 text-sm md:text-base italic" style={{ fontFamily: "'Covered By Your Grace', cursive" }}>
            Hover over the candy decorations for a sweet surprise! 🍬
          </p>
        </div>
      </div>
    </div>
  )
}

export default App