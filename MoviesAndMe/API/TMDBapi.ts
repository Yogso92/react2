const API_TOKEN = "3351c574abff1ce3009f75632ad85cc0";

export function getFilmsFromApiWithSearchedText (text: string, page: number) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text+ '&page='+page
  return fetch(url)
    .then((response) => response.json())
    .catch((error => console.error(error)))
}
export function getImageFromApi(name: string){
    return 'https://image.tmdb.org/t/p/w300'+ name
}