import {Pipe, PipeTransform} from '@angular/core';
import {Storage} from 'aws-amplify';

@Pipe({
    name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

    async transform(value: string, ...args: unknown[]): Promise<any> {
        const url = await Storage.get(value, {level: 'public'});
        console.log(url);
        return url;
    }

}
