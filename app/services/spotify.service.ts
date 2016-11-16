import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SpotifyService{
    private searchUrl:string;

    constructor(private _http:Http){

    }

    searchMusic(str:string, type='artists'){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl)
            .map(res => res.json());
    }
}