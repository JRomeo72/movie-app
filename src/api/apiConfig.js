const apiConfig = {
    baseURL: 'https://api.themoviedb.org/3/',
    apiKey: '9371c6999843e59806c7826cf7a549ae',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;