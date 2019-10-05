//DATA STRUCTURES
    /*  -Data structures are very simply a way of organizing the data 
        that is stored in a computer or in a database.
        -One reason is that using data structures correctly in your programming can highly affect 
        how fast performance and efficiently your applications run.

        -There are multiple different types of data structures
        -Each type of data structure represents a differentway of organizing the data that is stored.
        -each data structure has its own strengths and its own weaknesses.

        -For example some data structures are very fast at storing and recording data (LINKED LISTS-"old tweets")
        but they are slow as searchin through data and retrieving it 
        other data structures are the exact opposite: fast at searching/retrieving it but low at recording
        HASH TABLE-"new tweets")
        */

                                        //LINKED LISTS (fast with recording)

        //Constructor function 
    function User (firstName, lastName, profession, date) { //User is a name of CLASS
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.date = date;
    };

    const customer1 = new User ('Aldin', 'Dardagan', 'teacher', 2019) //object
    const customer397 = new User ('John', 'English', 'miner', 2016)


    function Student (name, grade) {
        this.name = name;
        this.grade = grade;
    };
    
    //const Haris = new Student ('Haris', A)
    const Bojan = new Student ('Bojan', B)

        //Prototypes (could be PROPERTIES or METHODS)
    User.prototype.emailDomaine = '@facebook.com'//PROPERTY

    customer1.emailDomaine //any given customer can acces this PROPERTY
    customer397.emailDomaine 

    Student.prototype.idstartNumber = 22 //PROPERTY

    Haris.idstartNumber
    Bojan.idstartNumber

    User.prototype.getUserInfo = function () { //METHOD
        return this.firstName+this.lastName+this.profession+this.emailDomaine;
    }

    customer1.getUserInfo () //kod METODA mora iči () jer je funkcija
    customer397.getUserInfo ()//JohnEnglish@facebook.com između ostalih

    Student.prototype.getStudentInfo = function () {
        return this.name+this.grade;
    }
    Haris.getStudentInfo() //kod METODA mora iči () jer je funkcija
    Bojan.getStudentInfo()

/*LINKED LIST - It is a list of elements called nodes that are connected together or linked together
 in a single file line.
-There are two types of linked lists: a singly linked list and a doubly linked list.
-Singly node only has reference to the node after it and in a doubly linked list has reference to after it 
but also before it.
-The linked list itself as a whole only needs to know about two nodes: the head node and the tell node 
and it keeps a reference to the head pointer and the tail pointer.

-The operations that we are going to want to perform are: adding a node to the head of the linked list, adding a node to the tail of the linked list, 
removing the head and removing the tail, searching- we're gonna want to be able to search through our linked
list to see if a certain piece of data that we are looking for actually resides in our linked list.

Each linked list has: 1.head node and teil node (it encompass all other inside them)
Each node has: 1.Value 2.nextNode 3.previousNode
*/

        //linked list CONSTRUCTOR FUNCTION

        function LinkedList () {
            this.head = null;
            this.tail = null;
        }

        const User1 = new LinkedList ();
        //node CONSTRUCTOR FUNCTION

        function Node (value, next, prev) {
            this.value = value;
            this.next = next;
            this.prev = prev;
        }


        //node PROTOTYPE FUNCTION

        LinkedList.prototype.addToHead = function (value) {
            //1.create a new head node
            const newNode = new Node (value, this.head, null); //1.value, 2.next-head 3.prev-null

            //2 Add to Head (1.some nodes there or 2.empty 3.add node to head)

                //if already there are some nodes added 

                    //(this.head) its there since we have some nodes already, and now referncing to old head in LL//
                    //.this.head.prev //our previous reference (head pointer) needs to ref to new Node
                    //.this.head.prev = newNode

                if (this.head) {

                    this.head.prev = newNode; //this always refers to LL CONSTRUCTION FUNCTION and not NODE CON FUNC

                //if there is no nodes (empty9 and we are adding for the fisrt time to LL

                    //this.head.prev doesnt exist
                    //when 1 time adding node: head node is also teil node
                
                }else{
                    this.tail = newNode;

                }

            //now we shall put our new Node to the Head
             this.head = newNode;
        }

//The use of Add to Head
-----------------------------------------------------------------------------------
function LinkedList () {
    this.head = null;
    this.tail = null;
}


function Node (value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}


LinkedList.prototype.addToHead = function (value) {
    
    const newNode = new Node (value, this.head, null);

    if (this.head) {
        this.head.prev = newNode;
    }else{
        this.tail = newNode;
    }
    this.head = newNode;
}

const ll = new LinkedList ();

ll.addToHead (100); 
ll.addToHead (200);
ll.addToHead (200);


//Add to Teil --- opposite to Add to Head

LinkedList.prototype.addToTeil = function (value) {

    const newNode = new Node (value, null, this.tail);

    if (this.tail) {
        this.tail.next = newNode; //if not empty)
    }else{
        this.head = newNode; //empty
    }
    this.tail = newNode;
}

const myLL = new LinkedList ();

myLL.addToTeil (10);
myLL.addToTeil (20);
myLL.addToTeil (30);

//Remove Head

LinkedList.prototype.removeHead = function () { //no parameters
    if (!this.head) return null; //if linked list is empty return null
    const valHead = this.head.value; //create value variable of the head which want to remove
    this.head = this.head.next //create new head node-move the head pointer
    if (this.head) {
        this.head.prev = null; //if not empty
    }else{
        this.tail = null; //if empty
    }
    return valHead;
}

const ll2 = new LinkedList ();

ll2.removeHead ();


LinkedList.prototype.removeTail = function () { //no parameters
    if (!this.tail) return null; //if linked list is empty
    const valTail = this.tail.value;  //create tail.value variable
    this.tail = this.tail.prev; //move the tail pointer
    if (this.tail) {
        this.tail.next = null; //not empty
    }else{
        this.head = null; //empty
    }
    return valTail;
}

const ll3 = new LinkedList ();
ll3.removeTail ();

//Search Method--want to check if piece of data is in our linked list
//if not present (return null)
//if yes return that value

LinkedList.prototype.search = function (searchValue){
    const currentNode = this.head         //we should start search from head or tail node---becomes current
    while (currentNode) {  // always true unless null
        currentNode = currentNode.next; 
        if (currentNode.value === searchValue ) {
            return currentNode.value; //if true return value
        }

    }
    return null; //if false return null
}
    const myLL = new LinkedList ();

    myLL.addToHead (29);
    myLL.addToHead ('hello');
    myLL.addToTail (59);
    myLL.addToTail ('ciao');

    
