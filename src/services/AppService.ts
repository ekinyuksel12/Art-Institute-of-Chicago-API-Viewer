//Modules
import axios, { AxiosInstance, AxiosResponse } from "axios";




export default class AppService {
    private _axiosInstance: AxiosInstance

    //Endpoint paths.
    private _artworksPath: string = '/artworks'

    //API URLs
    AppServiceURL: string = 'https://api.artic.edu/api/v1'
    ImageServiceURL: string = 'https://www.artic.edu/iiif/2'

    //Fields that we want to fetch from the API.
    private _fields: string = 'id,title,artist_title,medium_display,dimensions,date_start,date_end,image_id'



    constructor() {
        //Initilaze axios
        this._axiosInstance = axios.create({
            baseURL: this.AppServiceURL
        })
    }

    //Error handling function
    private HandleError(error: any) {
        if (error.response) {
            // Not in the 200 response range 
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else {
            console.log(`Error: ${error.message}`);
        }
    }




    /**
     * Fetches the artworks from the API
     * 
     * @async
     * @param {number} page The page you want to load artworks from
     * @param {number} itemCount The amount of item you want to load each time
     * @returns {Artworks} Artworks
     */
    async getArtworks(page: number = 1, itemCount: number = 20): Promise<Artworks | null | void> {
        try {
            //setting up the path
            const path = this.AppServiceURL + this._artworksPath + `?fields=${this._fields}&page=${page}&limit=${itemCount}`

            //making the request
            const response: Artworks = (await this._axiosInstance.get(path)).data;

            return await response

        } catch (error: any) {
            this.HandleError(error)
        }
    }

    /**
     * Fetch the data of a single artwork
     *
     * @async
     * @param {(number | string | undefined)} id Unique ID of the artwork
     * @returns {Promise<Artwork | null | void>}
     */
    async getArtworkInfo(id: number | string | undefined): Promise<Artwork | null | void> {
        if (id) {
            try {
                //setting up the path
                const path = this.AppServiceURL + this._artworksPath + `/${id}/?fields=${this._fields}`

                //making the request
                const response = (await this._axiosInstance.get(path)).data.data;


                return await response

            } catch (error: any) {
                this.HandleError(error)
            }
        }
    }

    /**
     * Fetch the search results
     *
     * @async
     * @param {string} [query=""] Search query that is going to be used
     * @returns {Promise<AxiosResponse | null | void>}
     */
    async getSearchResults(query: string = ""): Promise<AxiosResponse | null | void> {
        try {
            //setting up the path
            const path = this.AppServiceURL + this._artworksPath + `/search?q=${query}&fields=${this._fields}`

            //making the request
            const response = (await this._axiosInstance.get(path)).data;

            return await response

        } catch (error: any) {
            this.HandleError(error)
        }
    }

    
    /**
     * Searches the spesific fields for an exact match.
     *
     * @async
     * @param {(string | undefined)} query Search query that is going to be used
     * @param {string} [field='title'] Fields that you want to search in
     * @returns {Promise<Artworks | null | void>}
     */
    async getExactMatchSearchResults(query: string | undefined, field: string = 'title'): Promise<Artworks | null | void> {
        if (query === undefined || query === '') return undefined

        try {
            const payload = JSON.parse(`{
                    "query": {
                      "match": {
                        "${field}": "${query}"
                      }
                    }
                  }`)

            const path = this.AppServiceURL + this._artworksPath + `/search?fields=${this._fields}&limit=100`

            const response: Artworks = await (await this._axiosInstance.post(path, payload)).data

            return await response

        } catch (error: any) {
            this.HandleError(error)
        }
    }

    /**
     * Generate the Image URL with artowork's image id
     *
     * @param {(number | string)} image_id Unique image ID of the artwork
     * @param {string} [size='400,'] Vertical resolution in px of the image
     * @returns {string}
     */
    getImageURL(image_id: number | string, size: string = '400,'): string {
        //setting up the path
        const path = this.ImageServiceURL + `/${image_id}/full/${size}/0/default.jpg`

        return path
    }
}