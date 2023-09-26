export const config=()=>({
     port:process.env.PORT,
     mongodb_menu_url:process.env.MONGODB_MENU_URL,
     mongodb_consumer_url:process.env.MONGODB_CONSUMER_URL,
     mongodb_table_url:process.env.MONGODB_TABLE_URL,
     mongodb_order_url:process.env.MONGODB_ORDER_URL,
     mongodb_image_url:process.env.MONGODB_IMAGE_URL,
     mongodb_category_url:process.env.MONGODB_CATEGORY_URL
})