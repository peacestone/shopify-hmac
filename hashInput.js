
 const crypto = require('crypto')

var goodBody = "{\"id\":788032119674292922,\"title\":\"Example T-Shirt\",\"body_html\":null,\"vendor\":\"Acme\",\"product_type\":\"Shirts\",\"created_at\":null,\"handle\":\"example-t-shirt\",\"updated_at\":null,\"published_at\":\"2018-05-10T11:18:30-04:00\",\"template_suffix\":null,\"tags\":\"mens t-shirt example\",\"published_scope\":\"web\",\"variants\":[{\"id\":642667041472713922,\"product_id\":788032119674292922,\"title\":\"\",\"price\":\"19.99\",\"sku\":\"example-shirt-s\",\"position\":0,\"inventory_policy\":\"deny\",\"compare_at_price\":\"24.99\",\"fulfillment_service\":\"manual\",\"inventory_management\":null,\"option1\":\"Small\",\"option2\":null,\"option3\":null,\"created_at\":null,\"updated_at\":null,\"taxable\":true,\"barcode\":null,\"grams\":200,\"image_id\":null,\"inventory_quantity\":75,\"weight\":200.0,\"weight_unit\":\"g\",\"inventory_item_id\":null,\"old_inventory_quantity\":75,\"requires_shipping\":true},{\"id\":757650484644203962,\"product_id\":788032119674292922,\"title\":\"\",\"price\":\"19.99\",\"sku\":\"example-shirt-m\",\"position\":0,\"inventory_policy\":\"deny\",\"compare_at_price\":\"24.99\",\"fulfillment_service\":\"manual\",\"inventory_management\":\"shopify\",\"option1\":\"Medium\",\"option2\":null,\"option3\":null,\"created_at\":null,\"updated_at\":null,\"taxable\":true,\"barcode\":null,\"grams\":200,\"image_id\":null,\"inventory_quantity\":50,\"weight\":200.0,\"weight_unit\":\"g\",\"inventory_item_id\":null,\"old_inventory_quantity\":50,\"requires_shipping\":true}],\"options\":[{\"id\":527050010214937811,\"product_id\":788032119674292922,\"name\":\"Title\",\"position\":1,\"values\":[\"Small\",\"Medium\"]}],\"images\":[{\"id\":539438707724640965,\"product_id\":788032119674292922,\"position\":0,\"created_at\":null,\"updated_at\":null,\"alt\":null,\"width\":323,\"height\":434,\"src\":\"\\/\\/cdn.shopify.com\\/s\\/assets\\/shopify_shirt-39bb555874ecaeed0a1170417d58bbcf792f7ceb56acfe758384f788710ba635.png\",\"variant_ids\":[]}],\"image\":null}"


var badBody = '{"id":788032119674292900,"title":"Example T-Shirt","body_html":null,"vendor":"Acme","product_type":"Shirts","created_at":null,"handle":"example-t-shirt","updated_at":null,"published_at":"2018-05-10T10:13:20-04:00","template_suffix":null,"tags":"mens t-shirt example","published_scope":"web","variants":[{"id":642667041472714000,"product_id":788032119674292900,"title":"","price":"19.99","sku":"example-shirt-s","position":0,"inventory_policy":"deny","compare_at_price":"24.99","fulfillment_service":"manual","inventory_management":null,"option1":"Small","option2":null,"option3":null,"created_at":null,"updated_at":null,"taxable":true,"barcode":null,"grams":200,"image_id":null,"inventory_quantity":75,"weight":200,"weight_unit":"g","inventory_item_id":null,"old_inventory_quantity":75,"requires_shipping":true},{"id":757650484644203900,"product_id":788032119674292900,"title":"","price":"19.99","sku":"example-shirt-m","position":0,"inventory_policy":"deny","compare_at_price":"24.99","fulfillment_service":"manual","inventory_management":"shopify","option1":"Medium","option2":null,"option3":null,"created_at":null,"updated_at":null,"taxable":true,"barcode":null,"grams":200,"image_id":null,"inventory_quantity":50,"weight":200,"weight_unit":"g","inventory_item_id":null,"old_inventory_quantity":50,"requires_shipping":true}],"options":[{"id":527050010214937800,"product_id":788032119674292900,"name":"Title","position":1,"values":["Small","Medium"]}],"images":[{"id":539438707724640960,"product_id":788032119674292900,"position":0,"created_at":null,"updated_at":null,"alt":null,"width":323,"height":434,"src":"//cdn.shopify.com/s/assets/shopify_shirt-39bb555874ecaeed0a1170417d58bbcf792f7ceb56acfe758384f788710ba635.png","variant_ids":[]}],"image":null}'


const badShopifyHmac = 'NFZMUpQw25vkSb+JlsQmD5G6rxDQxz95iWiLkV9+71s='
const goodShopifyHmac = "CNAGTG6QS3DwM3uPr6oInQH2qCqXBPHkGq8L186DhzU="
const SHARED_SECRET = '6cac45cb5c1a8194bf1c7f322182e5f4b8478b27be111f35859f7010def429d1'

     function verifyHmac(body, SHARED_SECRET, shopifyHmac ) {
         //bufferBody = new Buffer(jsonBody, 'utf8')
        
        const digest = crypto.createHmac('sha256', SHARED_SECRET ).update(body).digest('base64');

        return  digest === shopifyHmac
               
        }




        console.log('Bad Body!', verifyHmac(badBody, SHARED_SECRET, badShopifyHmac))
        console.log('Good Body!', verifyHmac(goodBody, SHARED_SECRET, goodShopifyHmac))

