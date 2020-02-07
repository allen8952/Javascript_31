#!/bin/bash
# Program:
#       Generate Practice HTML SCSS
# History:
#       2019/10/10 Bourne Release
yn="N"
while [ "${yn}" != "y" -a "${yn}" != "Y" ]
do
    read -p "Please input your HTML name: " fileuser    #輸入檔名
    filename=${fileuser:-"filename"}    #開始判斷有否設定檔名
    read -p "Are you sure use this \"${filename}\" ??(Y/N)" yn    #確定是否要用此檔名
done
touch scss/"${filename}".scss
touch tpl/"${filename}".html
touch js/"${filename}".js