export const config=()=>({
     port:process.env.PORT,
     mongodb_menu_url:process.env.MONGODB_MENU_URL,
     mongodb_consumer_url:process.env.MONGODB_CONSUMER_URL,
     mongodb_table_url:process.env.MONGODB_TABLE_URL,
})