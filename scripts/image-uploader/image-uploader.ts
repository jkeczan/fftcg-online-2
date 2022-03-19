import * as cards from './cards.json';
import {PutObjectCommand, S3Client} from '@aws-sdk/client-s3';

const BUCKET = 'fftcg-static222040-dev';

const client = new S3Client({
    region: 'us-east-1'
});


async function processCard(card: any) {
    const fileName = `${card.serial_number}.jpg`;
    const command = new PutObjectCommand({
        Key: fileName,
        Bucket: BUCKET,
        Body: ''
    });
    const response = await client.send(command);
}

async function main() {
    for (const card of cards) {
        await processCard(card);
    }
}

main();
