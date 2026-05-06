import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '1m40s', target: 20 }
  ]
};

const users = [
  { username: 'user1_ebac', password: 'psw!ebac@test' },
  { username: 'user2_ebac', password: 'psw!ebac@test' },
  { username: 'user3_ebac', password: 'psw!ebac@test' },
  { username: 'user4_ebac', password: 'psw!ebac@test' },
  { username: 'user5_ebac', password: 'psw!ebac@test' }
];

export default function () {
  const user = users[Math.floor(Math.random() * users.length)];

  const loginRes = http.post(
    'http://lojaebac.ebaconline.art.br/wp-login.php',
    {
      log: user.username,
      pwd: user.password
    }
  );

  check(loginRes, {
    'login status 200': (r) => r.status === 200
  });

  const catalogRes = http.get(
    'http://lojaebac.ebaconline.art.br/produtos/'
  );

  check(catalogRes, {
    'catalog status 200': (r) => r.status === 200
  });

  sleep(1);
}