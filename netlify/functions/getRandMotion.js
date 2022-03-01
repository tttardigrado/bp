const sb = require("./supabase")

exports.handler = async function(event, context) {
  // Get all portuguese motions 
  let { data, error } = await sb.supabase
      .from('Motions')
      .select("*")
      .eq("lang", "pt")

  if (data == []) {
    // No data -> No motion -> Error
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