import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],

  //Override Default Settings
  base: '/Bank-UI-React/'

   
})
