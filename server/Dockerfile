FROM python:3.12.4-bookworm

WORKDIR /python-docker

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

RUN cd src
CMD [ "python", "app.py"]