#! /usr/bin/env python3
# -*- coding: utf-8 -*-

# スクレイピングに必要なモジュールをインポート
import urllib.request as req
import sys
sys.path.append('/home/pi/.local/lib/python3.5/site-packages/')
from bs4 import BeautifulSoup

#ヤフー路線情報から九州地方の路線情報をスクレイピング
url = "https://transit.yahoo.co.jp/traininfo/area/7/"
res = req.urlopen(url)
soup = BeautifulSoup(res, "lxml") 
result = []

table = soup.select("table")

for table_list in table:
    tr_list = table_list.find_all("tr")
    for tr in tr_list:
        result_row = []
        td_list = tr.find_all(["td", "th"])
        for td in td_list:
            cell = td.get_text()
            result_row.append(cell)
        result.append(result_row)

for i, row in enumerate(result):
    print(str(i) + ":" + ",".join(row))
