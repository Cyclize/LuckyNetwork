import Redis from 'ioredis';
import { REDIS_URL, PRACTICEPVP_LB_URL } from '$lib/env';

const cacheClient = new Redis(REDIS_URL);

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
    return new Promise((resolve, reject) => {
        cacheClient.get('lb_practicepvp', async (err, data) => {
            if (err) return reject(err);

            if (data) {
                resolve({ body: data });
            } else {
                fetch(PRACTICEPVP_LB_URL)
                    .then(res => res.json())
                    .then(data => {
                        data = JSON.stringify(data.data.slice(0, -5));
                        cacheClient.setex('lb_practicepvp', 24*60*60, data);
                        resolve({ body: data });
                    });
            }
        });
    });
}
