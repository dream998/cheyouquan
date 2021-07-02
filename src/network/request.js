import axios from 'axios'

export function request(config) {
      const instance = axios.create({
          baseURL: 'https://qc26fm.fn.thelarkcloud.com/',
          timeout: 5000
      })

      return instance(config)
}