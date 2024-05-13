**What is Apache Arrow?**
Apache Arrow is a series of libraries that enable large data systems to process and transfer data quickly and efficiently. It is used by AWS Data Wrangler, the python library Pandas, MATLAB and many other technologies. The primary component of Apache Arrow is the in-memory columnar format specification used to represent table-like datasets in-memory.

**The Arrow Columnar format**
There are two advantages to this format for data processing. Firstly, processing data through this format is very fast. The image below gives a good representation of how data is stored in memory. Secondly, this format is language agnostic. Meaning that transferring data between different programming languages or between different databases is simple. Generally, for processing large amounts of data, a data processing engineer would create custom data structures to represent data sets in memory and would develop serialization interfaces to convert the data structures to different file formats or other data transport interfaces. This resulted in a large amount of wasted time within the development process.

**When would I use Apache Arrow?**
Apache Arrow is a good choice if you are processing large amounts of structured data, or if you are handling large, structured data transfer between many different connected technologies. For example, a Java application can call a C or C++ algorithm on data that originated in the JVM.

**An example in Python**
This shows how to read a csv file and process it into the Arrow Columnar format. (For large data sets it will likely be more efficient to use a different file format like Apache Parquet)

```py
# 1. Take some csv data and convert it to a table or array format
import pyarrow as pa
import pyarrow.csv as pacsv

# Get the csv in the same file directory
fn = 'apacheArrowExample0.csv'

# Read the csv file
table = pacsv.read_csv(fn)

# Create the schema for our csv file as a pyarrow Table
pa.Table
id: pa.int32()
firstname: pa.string()
lastname: pa.string()
dateofbirth: pa.date32()

# See that our csv data is formatted as a Apache Arrow Columnar data format
print(table)

"""
pyarrow.Table
id: int64
firstname: string
lastname: string
dateofbirth: date32[day]
----
id: [[1,2,3,4,5,6,7,8,9,10,...]]
firstname: [["Coral","Lucille","Marcy","Christian","Margarette","Vanessa","Christal","Anallese","Aaren","Christian",...]]
lastname: [["Killigrew","Chick","Read","Marden","Chapland","Nedrud","Mott","Johanna","Norrie","Bahr",...]]
dateofbirth: [[1917-01-15,1900-09-15,2018-03-27,1975-09-24,1929-10-31,1987-12-10,1995-12-26,1981-05-28,1914-07-04,1933-04-08,...]]

"""
```

More information about Apache Arrow can be found at [https://arrow.apache.org/](https://arrow.apache.org/)
