import axios from 'axios'

export function request(config) {
      const instance = axios.create({
          baseURL: 'https://qc26fm.fn.thelarkcloud.com/',
          
      })

      return instance(config)
}