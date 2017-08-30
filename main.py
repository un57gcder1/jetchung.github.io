import requests
import re
from bs4 import BeautifulSoup

session = requests.session()

req = session.get('https://artofproblemsolving.com/wiki/index.php?title=AMC_historical_results')

doc = str(BeautifulSoup(req.content, "lxml")).split("mw-headline")
doc = doc[1:]
scores = []
for score in range(0, len(doc) - 1, 2):
    scores.append(doc[score] + doc[score + 1])
string = """<h2><span class="mw-headline" id="2017">2017</spa
<h3><span class="mw-headline" id="AMC_10A">AMC 10A</span></h3
<ul><li>Average score: 59.33</li>                            
<li>AIME floor: 112.5</li></ul>                              
<h3><span class="mw-headline" id="AMC_10B">AMC 10B</span></h3
<ul><li>Average score: 66.55</li>                            
<li>AIME floor: 120</li></ul>                                
<h3><span class="mw-headline" id="AMC_12A">AMC 12A</span></h3
<ul><li>Average score: 56.99</li>                            
<li>AIME floor: 96</li></ul>                                 
<h3><span class="mw-headline" id="AMC_12B">AMC 12B</span></h3
<ul><li>Average score: 58.35</li>                            
<li>AIME floor: 100.5</li></ul>                              
<h3><span class="mw-headline" id="AIME_I">AIME I</span></h3> 
<ul><li>Average score: 5.69</li>                             
<li>Median score: </li>                                      
<li>USAMO cutoff: 225(AMC 12A), 235(AMC 12B)</li>            
<li>USAJMO cutoff: 224.5(AMC 10A), 233(AMC 10B)</li></ul><h3><span class="mw-headline" id="AIME_II">AIME II</span></h3>
<ul><li>Average score:  5.64</li>
<li>Median score: </li>
<li>USAMO cutoff: 221(AMC 12A),  230.5(AMC 12B)</li>
<li>USAJMO cutoff: 219(AMC 10A), 225(AMC 10B)</li></ul>"""
cut = re.sub(r"=|<>|<.>|<..>|<.>|<...>|<....>|<.....>|<......><\/\d|<[a-z]+ [a-z]+", "", string)
cut = re.sub(r"mw-headline|\"|<\/[a-z]+[0-9]+|id|\/[a-z]+", "", cut)
cut = re.sub(">|<", " ", cut)
cut = re.sub(r"[A-Z]+_\d\d[A-Z]|[A-Z]+_[A-Z]+", "", cut)
cut = cut.replace("  ", "")
# cut = cut.split(r" [A-Z]+ \d\d[A-Z]|[A-Z]+ [A-Z]+")
cut = cut.split('AIME I', 1)
print(cut)
AMC = cut[0]
AIME = cut[1]

AMC = AMC.split("\n")
year = AMC[0]
del AMC[0]
AMC_Scores = {}
AIME_Scores = {}
for n, i in enumerate(AMC):
    if n % 3 == 0:
        test = i
    elif n % 3 == 1 or n % 3 == 2:
        i = i.split(": ")
        AMC_Scores[(year + " " + test + " " + i[0])] = i[-1]
for n, i in enumerate(AIME):
    if n % 3 == 0:
        test = i
    elif n % 3 == 1 or n % 3 == 2:
        i = i.split(": ")
        AIME_Scores[(year + " " + test + " " + i[0])] = i[-1]
