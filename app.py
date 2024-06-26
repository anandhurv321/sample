

from flask import Flask,render_template,request
import pickle

app = Flask(__name__)
model= pickle.load(open("model/savedmodel98.sav","rb"))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contact.html')
def contact():
    return render_template('contact.html')

@app.route("/form.html")
def form():
    result=""
    return render_template("form.html")

@app.route('/warning.html')
def warning():
    return render_template('warning.html')



@app.route("/predict",methods=["POST"])
def predict():
    abc=request.form["gender"]
    if abc=="female":
        gender=0
    elif abc=="male":
        gender=1
    else:
        gender=2      

    abc1=request.form["businesstravel"]
    if abc1=="Non Travel":
        businesstravel=0
    elif abc1=="Travel Frequently":
        businesstravel=1
    else:
        businesstravel=2     

    abc2=request.form["maritalstatus"]
    if abc2=="Divorced":
        maritalstatus=0
    elif abc2=="Married":
        maritalstatus=1
    else:
        maritalstatus=2         

    age=int(request.form["age"])
    # businesstravel=int(request.form["businesstravel"])
    distancefromhome=int(request.form["distancefromhome"])
    environmentsatisfaction=int(request.form["environmentsatisfaction"])
    # gender=int(request.form["gender"])
    jobinvolvement=int(request.form["jobinvolvement"])
    jobsatisfaction=int(request.form["jobsatisfaction"])
    # maritalstatus=int(request.form["maritalstatus"])
    monthlyincome=int(request.form["monthlyincome"])
    percentsalaryhike=int(request.form["percentsalaryhike"])
    totalworkingyears=int(request.form["totalworkingyears"])
    worklifebalance=int(request.form["worklifebalance"])
    yearsatcompany=int(request.form["yearsatcompany"])
    yearssincelastpromotion=int(request.form["yearssincelastpromotion"])


    result=model.predict([[age, businesstravel,
    distancefromhome,
    environmentsatisfaction, gender, jobinvolvement, jobsatisfaction, maritalstatus,
    monthlyincome, percentsalaryhike,
    totalworkingyears, worklifebalance,
    yearsatcompany, yearssincelastpromotion,]])[0]
    # return render_template("form.html",**locals())
    return render_template("form.html", result=result)



if __name__ == "__main__":
    app.run(debug=True)