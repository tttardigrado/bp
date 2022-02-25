const sb = require("./supabase")

exports.handler = async function(event, context) {
  let { data, error } = await sb.supabase
      .from('Motions')
      .select("*")
      .eq("lang", "pt")

  if (!data) {
    return {
      statusCode: 404,
      body: "Error"
    }
  }

  let single = sb.grt_random(data)

  return {
    statusCode: 200,
    body: JSON.stringify(single)
  }
}