//An artwork is the single item from the response
interface Artwork {
    id: string,             //Unique id
    title: string,          //Title
    artist_title: string,   //Artist
    medium_display: string, //Medium
    dimensions: string,     //Dimensions
    image_id: string        //ID for the image
    date_start: number,     //Begining date
    date_end: number,       //Ending date
}

//Artworks is an array of artworks. It used to parse the response from the server.
interface Artworks {
    data: Artwork[]
}