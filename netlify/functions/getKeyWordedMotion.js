const sb = require("./supabase")

exports.handler = async function(event, context) {
  const filter = "like"
  let param = "%" + event["queryStringParameters"]["kw"] + "%"
  let { data, error } = await sb.supabase
      .from('Motions')
      .select("*")
      .eq("lang", "pt")
      .or(`kw1.${filter}.${param},kw2.${filter}.${param},kw3.${filter}.${param}`)

  if (data == []) {
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