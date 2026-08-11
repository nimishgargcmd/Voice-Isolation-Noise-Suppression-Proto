module.exports = async function (context, req) {
  const expected = process.env.APP_PASSWORD;

  if (!expected) {
    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: { ok: true },
    };
    return;
  }

  const { password } = req.body || {};

  if (password === expected) {
    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: { ok: true },
    };
  } else {
    context.res = {
      status: 401,
      headers: { "Content-Type": "application/json" },
      body: { ok: false, error: "Incorrect password" },
    };
  }
};
