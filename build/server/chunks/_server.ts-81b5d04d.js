import { j as json } from './index-36410280.js';
import { sha256 } from 'js-sha256';

const POST = async ({ request, locals }) => {
  const body = await request.json();
  const session = await locals.getSession();
  if (!body || !session) {
    return new Response(JSON.stringify({ error: "No body" }), { status: 400 });
  }
  if (!body.now || body.now > (/* @__PURE__ */ new Date()).getTime() + 1e3 * 60) {
    return new Response(JSON.stringify({ error: "Invalid time" }), { status: 400 });
  }
  const local_hash = sha256(session.user.name + body.now.toString());
  if (local_hash != body.hash) {
    return new Response(JSON.stringify({ error: "Invalid hash" }), { status: 400 });
  }
  try {
    const data = await fetch("http://127.0.0.1:8000/v1/nlidb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    const response = await data.json();
    const status = data.status;
    if (status != 200) {
      return new Response(JSON.stringify(response), { status });
    }
    return json(response);
  } catch (e) {
    return new Response(JSON.stringify({ error: "Internal error", detail: e.toString() }), {
      status: 500
    });
  }
};

export { POST };
//# sourceMappingURL=_server.ts-81b5d04d.js.map
