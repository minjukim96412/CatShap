package catshap.butler.bean;

public class Grade {

	private int gradeNo;
	private String gname;
	private double gbenefit;

	public Grade() {
	}

	public Grade(int gradeNo, String gname, double gbenefit) {
		super();
		this.gradeNo = gradeNo;
		this.gname = gname;
		this.gbenefit = gbenefit;
	}

	public int getGradeNo() {
		return gradeNo;
	}

	public void setGradeNo(int gradeNo) {
		this.gradeNo = gradeNo;
	}

	public String getGname() {
		return gname;
	}

	public void setGname(String gname) {
		this.gname = gname;
	}

	public double getGbenefit() {
		return gbenefit;
	}

	public void setGbenefit(double gbenefit) {
		this.gbenefit = gbenefit;
	}

	@Override
	public String toString() {
		return "Grade [gradeNo=" + gradeNo + ", gname=" + gname + ", gbenefit=" + gbenefit + "]";
	}

}