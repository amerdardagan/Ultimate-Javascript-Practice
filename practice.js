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
    
    const Haris = new Student ('Haris', A)
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

/*LINKED LIST - It is a list of elements called nodes that are connected together or linked together in a single file line.
-There are two types of linked lists: a singly linked list and a doubly linked list.
-Singly node only has reference to the node after it and in a doubly linked list has reference to after it but also before it.
-The linked list itself as a whole only needs to know about two nodes: the head node and the tell node and it keeps a reference to the head pointer and the tail pointer.

-The operations that we are going to want to perform are: adding a node to the head of the linked list, adding a node to the tail of the linked list, 
removing the head and removing the tail, searching- we're gonna want to be able to search through our linked
list to see if a certain piece of data that we are looking for actually resides in our linked list.

Each linked list has: 1.head node and teil node (it encompass all other inside them)
Each node has: 1.Value 2.nextNode 3.previousNode
*/

        //linked list CONSTRUCTOR FUNCTION

        function LinkedList () {
            this.head = null;
            this.teil = null;
        }

        const User1 = new LinkedList ();
        //node CONSTRUCTOR FUNCTION

        function Node (value, next, prev) {
            this.value = value;
            this.next = next;
            this.prev = prev;
        }

        const Node34 = new Node ();

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
                    this.teil = newNode;

                }

            //now we shall put our new Node to the Head
             this.head = newNode;
        }

    

       




    