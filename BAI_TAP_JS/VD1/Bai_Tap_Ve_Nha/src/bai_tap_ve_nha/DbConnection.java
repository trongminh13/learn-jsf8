/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package bai_tap_ve_nha;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;
/**
 *
 * @author ADMIN
 */
public class DbConnection {
    public static Connection getConnect()
    {
        String url ="jdbc:mysql://localhost:3306/thongtin";
        String user ="root";
        String pass ="";
        try {
            System.out.println("Kết nối thành công");
            return DriverManager.getConnection(url, user, pass);
        } catch (SQLException ex) {
            System.out.println("Lỗi kết nối: " + ex.getMessage());
        }
        return null;
    }
    public static ResultSet getData(String sql) {
        ResultSet kq = null;
        try {
            Statement st = DbConnection.getConnect().createStatement();
            return kq = st.executeQuery(sql);
        } catch (SQLException ex) {
            System.out.println("Loi: " + ex.toString());
        }
        return null;
    }
    public static ResultSet LayThongTinDN()
    {
        String sql = "Select * from dangnhap";
        return getData(sql);
    }
}
