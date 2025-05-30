class Employees {
	private String firstName;
	private String lastName;
	private String email;
	
	{
		System.out.println("instance block start");
		System.out.println("instance block end");
	}
	
	public Employees(){ // no-org construtor
		System.out.println("no-org construtor start");
		System.out.println("cretes an object");
		System.out.println("no-org construtor end");
	}
	
	public Employees(String fN, String lN){ // org construtor
		System.out.println("2 orgs construtor start");
		firstName = fN;
		lastName = lN;
		System.out.println("2 orgs construtor end");
	}
	
	public Employees(String fN, String lN, String mail){ // org construtor
		this(fN, lN);
		System.out.println("3 orgs construtor start");
		System.out.println("cretes an object");
		email = mail;
		System.out.println("3 orgs construtor end");
	}
	
	public static void main(String[] args) {
		System.out.println("main start");
		Employees salma = new Employees("salma", "shaik", "mail");
		System.out.println("main end");
	}
}