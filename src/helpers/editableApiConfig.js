// export const API = 'https://formwapp.onrender.com'

const local = import.meta.env.VITE_LOCAL
console.log(local)
let API_BACK
if (local) {
  API_BACK = 'http://192.168.18.21:3001'
} else {
  API_BACK = import.meta.env.VITE_API
}
export const API = API_BACK
// export const imagenDeRespaldo = 'https://w0.peakpx.com/wallpaper/419/206/HD-wallpaper-warcraft-darck-elf-elf.jpg'

// export const urlMedia = 'https://media.rawg.io/media/crop/600/400/games'
