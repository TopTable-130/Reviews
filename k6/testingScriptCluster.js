
import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');
// randomint helper function to change the enpoints depning on need.
const randomInt = (max) => {
  return Math.floor(Math.random() * max) + 1
}

export let options = {
  stages: [
    { duration: '10s', target: 400 },
    { duration: '30s', target: 400 },
    { duration: '5s', target: 500 },
    { duration: '30s', target: 500 },


  ],
};

export default function() {
  var url = `http://localhost:3000/resturant/${randomInt(10000000)}/reviews`;

  check(http.get(url), {
    'status is 200': r => r.status == 200
  }) || errorRate.add(1);
}

