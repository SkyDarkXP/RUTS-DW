# 1. ใช้ Nginx เป็นเซิร์ฟเวอร์
FROM nginx:alpine

# 2. ลบไฟล์หน้าเว็บตั้งต้นของ Nginx ทิ้งไป
RUN rm -rf /usr/share/nginx/html/*

# 3. ก๊อปปี้ไฟล์หน้าเว็บ Angular ของคุณไปใส่แทน
# (สำคัญ: แก้ไข path ตรงนี้ให้ตรงกับ outputPath ใน angular.json)
COPY ./dist/ruts-frontend/browser/ /usr/share/nginx/html/
# **หากรันแล้ว Error หาโฟลเดอร์ไม่เจอ ให้ลองเปลี่ยนบรรทัดบนเป็น: COPY ./dist/ruts-frontend/ /usr/share/nginx/html/

# 4. ก๊อปปี้ไฟล์ตั้งค่า Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 5. เปิดพอร์ต 80
EXPOSE 80

# 6. สั่งให้ Nginx ทำงาน
CMD ["nginx", "-g", "daemon off;"]
