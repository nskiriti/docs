class Arrays {
	public static void main(String[] stringArray){
		System.out.println("main method start");
		emptyArray();
		emptyArrayWithNewKeyword();
		arrayWithFixedValues();
		System.out.println("main method end");
	}
	public static void emptyArray() {
		int[] idsArray = {};
		System.out.println("length = "+idsArray.length);
	}
	public static void emptyArrayWithNewKeyword() {
		int[] idsArray = new int[0];
		System.out.println("length = "+idsArray.length);
	}
	public static void arrayWithFixedValues() {
		int[] idsArray = {10,11,12,13,14,15,16,17,18,19,20};
		System.out.println("length = "+idsArray.length);
	}
}
