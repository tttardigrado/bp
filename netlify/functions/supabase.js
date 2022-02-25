const { createClient } = require("@supabase/supabase-js")

const sbKey = process.env.SUPABASE_KEY
const sbUrl = process.env.SUPABASE_URL

exports.supabase = createClient(sbUrl, sbKey)

exports.grt_random = (list) => {
    return list[Math.floor((Math.random()*list.length))];
}