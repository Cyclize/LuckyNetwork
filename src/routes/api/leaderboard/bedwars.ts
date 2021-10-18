import Redis from 'ioredis';
import { REDIS_URL, BEDWARS_LB_URL } from '$lib/env';

const cacheClient = new Redis(REDIS_URL);

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
 export async function get() {
    return new Promise((resolve, reject) => {
        cacheClient.get('lb_bedwars', async (err, data) => {
            if (err) return reject(err);

            if (data) {
                resolve({ body: data });
            } else {
                fetch(BEDWARS_LB_URL)
                    .then(res => res.json())
                    .then(data => {
                        data = JSON.stringify(data.data.map(({name, wins}) =>  ({name, wins})).slice(0, -5));
                        cacheClient.setex('lb_bedwars', 3600, data);
                        resolve({ body: data });
                    });
            }
        });
    });
}
