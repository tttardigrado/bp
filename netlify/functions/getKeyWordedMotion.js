const sb = require("./supabase")

exports.handler = async function(event, context) {

  // filter and keyword-parameter values
  const filter = "ilike"
  const param = "%" + event["queryStringParameters"]["kw"] + "%"

  // Select data from the DB
  let { data, error } = await sb.supabase
      .from('Motions')
      .select("*")
      .eq("lang", "pt")
      .or(`kw1.${filter}.${param},kw2.${filter}.${param},kw3.${filter}.${param},motion.${filter}.${param}`)

  if (data == []) {
    // No data -> No motion has a compatible keyword -> Error
    return {
      statusCode: 404,
      body: "Error"
    }
  }

  // Get a random motion from data
  let single = sb.get_random(data)

  return {
    statusCode: 200,
    body: JSON.stringify(single)
  }
}