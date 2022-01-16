module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4bbb08cd00e859690a3cad3a633eb2ef'),
  },
});
