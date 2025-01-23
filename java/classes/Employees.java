class Employees {
	public String firstName;
	public String lastName;
	public String email;
	
	public Employees(){
	}
	
	public void create(){
		
	}
	public static void main(String[] args) {
		Employees ravi = new Employees();
		System.out.println(ravi.hashCode());
		Employees kireeti = new Employees();
		System.out.println(kireeti.hashCode());
		Employees kaveri = new Employees();
		System.out.println(kaveri.hashCode());
	}
}