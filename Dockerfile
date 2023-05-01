FROM node:17 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN npx browserslist@latest --update-db
RUN yarn build



# FROM nginx:1.12-alpine

# ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/* 
# COPY docker/nginx/prod.conf /temp/prod.conf
# COPY docker/nginx/prod.conf /etc/nginx/conf.d/default.conf

# COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
