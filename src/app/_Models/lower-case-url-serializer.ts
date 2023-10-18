import { DefaultUrlSerializer } from '@angular/router';

export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
    CP(url: string) {
        url = "https://cswebapps.com/creativeplanner";
        console.log("Cudtom Url---->", url);
        return url;
    }
}
