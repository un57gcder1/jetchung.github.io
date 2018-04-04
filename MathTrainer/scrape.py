__author__ = 'student'
from bs4 import BeautifulSoup
import requests
import csv
import json

class Problem_Problem(object):
    problem = ""
    solution = ""
    source = ""
    number = 0
    difficulty = 0
    subject = ""

    def __init__(self, problem, solution, source, number, difficulty, subject):
        self.problem = problem
        self.solution = solution



all_problems = []



def find_difficulty(contest,p):
    if contest == "AMC 10":
        if p <= 5:
            difficulty = 1
        if p <= 20 and p > 5:
            difficulty = 2
        if p <= 25 and p > 20:
            difficulty = 3
    elif contest == "AMC 12":
        if p <= 5:
            difficulty = 1
        if p <= 10 and p > 5:
            difficulty = 2
        if p <= 20 and p > 10:
            difficulty = 3
        if p <= 25 and p >20:
            difficulty = 4
    elif contest == "AIME":
        if p <= 5:
            difficulty = 3
        if p <= 10 and p > 5:
            difficulty = 4
        if p <= 13 and p > 10:
            difficulty = 5
        if p <= 15 and p > 13:
            difficulty = 7
    return difficulty

def find_number(contest):
    if contest == "AMC 10":
        number = 25
    if contest == "AMC 12":
        number = 25
    if contest == "AIME":
        number = 15
    return number

for contest in ("AMC 10", "AMC 12"):
    for year in range(2002,2019):
        for letter in ("A","B"):
            page = ("http://artofproblemsolving.com/wiki/index.php?title={}_{}_{}{}_Problems".format(year, contest[:-3], contest[-2:], letter))
            print(page)
            html = requests.get(page,timeout=5)
            page_content = str(BeautifulSoup(html.content, "html.parser"))
            problems = page_content.split("mw-headline")
            end = find_number(contest)
            solutions = "https://artofproblemsolving.com/wiki/index.php?title={}_AMC_{}{}_Answer_Key".format(year, 10, letter)
            html = requests.get(solutions,timeout=5)
            page_content = str(BeautifulSoup(html.content, "html.parser"))

            solution = (page_content.split("mw-content-text"))[1]
            solution = solution.split("</ol>")[0]
            solution = solution.replace('" lang="en"><ol>','')
            solution = solution.replace('<li>','')
            solution = solution.replace('</li>','')
            solutions = solution.split("\n")
            for p in range(1,26):
                problem = str(problems[p]).replace("<span class=","")
                problem = problem.replace("<h2","")
                problem = '<h2><span class="mw-headline" id {}'.format(problem)
                problem = problem.replace('href="','href="https://artofproblemsolving.com')
                problem = problem[:-2]


                difficulty = find_difficulty(contest, p)
                subject = "all"
                problem = problem.replace('\n','')
                id = "{}{}{}{}".format(contest,year,p,letter)
                problem = {"problem":problem,"solution":solutions[p-1].replace("<ol>",""),"source":contest,"number":p,"difficulty":difficulty,"subject":subject,"id":id}

                all_problems.append(problem)

for year in range(1983,2000):
    page = ("http://artofproblemsolving.com/wiki/index.php?title={}_{}_Problems".format(year, "AIME"))
    print(page)
    html = requests.get(page,timeout=5)
    page_content = str(BeautifulSoup(html.content, "html.parser"))
    problems = page_content.split("mw-headline")
    end = find_number("AIME")
    page_content = str(BeautifulSoup(html.content, "html.parser"))

    solutions = "https://artofproblemsolving.com/wiki/index.php?title={}_{}_Answer_Key".format(year, "AIME")
    html = requests.get(solutions,timeout=5)
    sol_content = str(BeautifulSoup(html.content, "html.parser"))

    solution = (str(sol_content).split("mw-content-text"))[1]
    solution = solution.split("</ol>")[0]
    solution = solution.replace('" lang="en"><ol>','')
    solution = solution.replace('<li>','')
    solution = solution.replace('</li>','')
    solutions = solution.split("\n")


    for p in range(1,16):
            problem = str(problems[p]).replace("<span class=","")
            problem = problem.replace("<h2","")
            problem = '<h2><span class="mw-headline" id {}'.format(problem)
            problem = problem.replace('href="','href="https://artofproblemsolving.com')
            problem = problem[:-2]

            difficulty = find_difficulty("AIME", p)
            subject = "all"
            problem = problem.replace('\n','')
            id = "AIME{}{}".format(year,p)
            problem = {"problem":problem,"solution":solutions[p+1].replace("<ol>",""),"source":"AIME","number":p,"difficulty":difficulty,"subject":subject,"id":id}
            all_problems.append(problem)

for letter in ("I","II"):
    for year in range(2001,2019):
        page = ("http://artofproblemsolving.com/wiki/index.php?title={}_{}_{}_Problems".format(year, "AIME",letter))
        print(page)
        html = requests.get(page,timeout=5)
        page_content = str(BeautifulSoup(html.content, "html.parser"))
        problems = page_content.split("mw-headline")
        end = find_number("AIME")
        page_content = str(BeautifulSoup(html.content, "html.parser"))

        solutions = "https://artofproblemsolving.com/wiki/index.php?title={}_{}_Answer_Key".format(year, "AIME")
        html = requests.get(solutions,timeout=5)
        sol_content = str(BeautifulSoup(html.content, "html.parser"))

        solution = (str(sol_content).split("mw-content-text"))[1]
        solution = solution.split("</ol>")[0]
        solution = solution.replace('" lang="en"><ol>','')

        for p in range(1,16):
            problem = str(problems[p]).replace("<span class=","")
            problem = problem.replace("<h2","")
            problem = '<h2><span class="mw-headline" id {}'.format(problem)
            problem = problem.replace('href="','href="https://artofproblemsolving.com')
            problem = problem[:-2]

            difficulty = find_difficulty("AIME", p)
            subject = "all"
            problem = problem.replace('\n','')
            id = "AIME{}{}{}".format(year,p,letter)
            problem = {"problem":problem,"solution":solutions[p+1].replace("<ol>",""),"source":"AIME","number":p,"difficulty":difficulty,"subject":subject,"id":id}
            all_problems.append(problem)







print(all_problems)
with open('problems.txt', 'w') as outfile:
    for x in range(0,len(all_problems)):
        outfile.write(json.dumps((all_problems[x]), indent=4))

