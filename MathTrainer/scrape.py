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

for contest in ("AMC 10", "AMC 12", "AIME"):
    for year in range(2002,2018):
        for letter in ("A","B"):
            page = ("http://artofproblemsolving.com/wiki/index.php?title={}_AMC_{}{}_Problems".format(year, 10, letter))
            html = requests.get(page,timeout=5)
            page_content = str(BeautifulSoup(html.content, "html.parser"))
            problems = page_content.split("mw-headline")
            end = find_number(contest)
            for p in range(0,end):
                problem = str(problems[p]).replace("<span class=","")
                problem = problem.replace("<h2","")
                problem = '<h2><span class="mw-headline" id {}'.format(problem)
                problem = problem.replace('href="','href="https://artofproblemsolving.com')
                problem = problem[:-2]
                solutions = "https://artofproblemsolving.com/wiki/index.php?title={}_AMC_{}{}_Answer_Key".format(year, 10, letter)
                html = requests.get(solutions,timeout=5)
                page_content = str(BeautifulSoup(html.content, "html.parser"))
                solution = (page_content.split("mw-content-text"))[1]
                solution = solution.split("</ol>")[0]
                solution = solution.replace('" lang="en"><ol>','')
                solution = solution.replace('<li>','')
                solution = solution.replace('</li>','')
                solutions = solution.split("\n")

                difficulty = find_difficulty(contest, p+1)
                subject = "all"

                problem = Problem_Problem(problem,solutions[p],"AMC 10",p+1,difficulty,subject)
                all_problems.append(problem)


with open('problems.txt', 'w') as outfile:
    json.dump(all_problems,outfile)