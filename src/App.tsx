import { GingerbreadHouse } from './components/GingerbreadHouse'
import { Snowfall } from './components/Snowfall'
import { MusicPlayer } from './components/MusicPlayer'

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8 overflow-hidden relative">
      <Snowfall />
      <MusicPlayer />
      
      <div className="relative z-10 text-center w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 md:mb-4 tracking-tight drop-shadow-lg">
          Happy Holiday
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-12 font-medium">
          From @fletchto99 and GitHub Spark
        </p>
        
        <div className="p-4 md:p-8 lg:p-12">
          <GingerbreadHouse />
        </div>
      </div>
    </div>
  )
}

export default App