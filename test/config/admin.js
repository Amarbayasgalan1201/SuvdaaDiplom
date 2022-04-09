module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9b7e70c4140fbc67c656ffc10b6276dd'),
  },
});
