import { useState, useEffect, useRef } from 'react'
import { SpeakerHigh, SpeakerSlash } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)
  const sourceNodeRef = useRef<OscillatorNode | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const intervalRef = useRef<number | null>(null)

  const jingleBellsMelody = [
    { note: 329.63, duration: 0.25 },
    { note: 329.63, duration: 0.25 },
    { note: 329.63, duration: 0.5 },
    { note: 329.63, duration: 0.25 },
    { note: 329.63, duration: 0.25 },
    { note: 329.63, duration: 0.5 },
    { note: 329.63, duration: 0.25 },
    { note: 392.00, duration: 0.25 },
    { note: 261.63, duration: 0.375 },
    { note: 293.66, duration: 0.125 },
    { note: 329.63, duration: 1.0 },
    { note: 349.23, duration: 0.25 },
    { note: 349.23, duration: 0.25 },
    { note: 349.23, duration: 0.375 },
    { note: 349.23, duration: 0.125 },
    { note: 349.23, duration: 0.25 },
    { note: 329.63, duration: 0.25 },
    { note: 329.63, duration: 0.25 },
    { note: 329.63, duration: 0.125 },
    { note: 329.63, duration: 0.125 },
    { note: 329.63, duration: 0.25 },
    { note: 293.66, duration: 0.25 },
    { note: 293.66, duration: 0.25 },
    { note: 349.23, duration: 0.25 },
    { note: 293.66, duration: 0.25 },
    { note: 392.00, duration: 0.5 },
  ]

  const playMelody = () => {
    if (!audioContextRef.current || !gainNodeRef.current) return

    const audioContext = audioContextRef.current
    const gainNode = gainNodeRef.current
    let currentTime = audioContext.currentTime
    let melodyIndex = 0

    const playNextNote = () => {
      if (!isPlaying || !audioContextRef.current || !gainNodeRef.current) return

      const note = jingleBellsMelody[melodyIndex]
      const oscillator = audioContextRef.current.createOscillator()
      const noteGain = audioContextRef.current.createGain()

      oscillator.type = 'sine'
      oscillator.frequency.setValueAtTime(note.note, audioContextRef.current.currentTime)
      
      noteGain.gain.setValueAtTime(0, audioContextRef.current.currentTime)
      noteGain.gain.linearRampToValueAtTime(0.15, audioContextRef.current.currentTime + 0.01)
      noteGain.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + note.duration)

      oscillator.connect(noteGain)
      noteGain.connect(gainNodeRef.current!)
      
      oscillator.start(audioContextRef.current.currentTime)
      oscillator.stop(audioContextRef.current.currentTime + note.duration)

      melodyIndex = (melodyIndex + 1) % jingleBellsMelody.length

      if (melodyIndex === 0) {
        intervalRef.current = window.setTimeout(playNextNote, (note.duration + 1) * 1000)
      } else {
        intervalRef.current = window.setTimeout(playNextNote, note.duration * 1000)
      }
    }

    playNextNote()
  }

  const startMusic = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext()
      gainNodeRef.current = audioContextRef.current.createGain()
      gainNodeRef.current.connect(audioContextRef.current.destination)
      gainNodeRef.current.gain.setValueAtTime(0.3, audioContextRef.current.currentTime)
    }

    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume()
    }

    setIsPlaying(true)
  }

  const stopMusic = () => {
    setIsPlaying(false)
    if (intervalRef.current) {
      clearTimeout(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    if (isPlaying) {
      playMelody()
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
    }
  }, [isPlaying])

  useEffect(() => {
    return () => {
      stopMusic()
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic()
    } else {
      startMusic()
    }
  }

  return (
    <Button
      onClick={toggleMusic}
      variant="secondary"
      size="icon"
      className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full shadow-lg"
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      {isPlaying ? (
        <SpeakerHigh className="text-primary" />
      ) : (
        <SpeakerSlash className="text-muted-foreground" />
      )}
    </Button>
  )
}
