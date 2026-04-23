/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package bai_tap_ve_nha;

/**
 *
 * @author ADMIN
 */
public class Bai_Tap_Ve_Nha {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        //LuaChonCV fr =new LuaChonCV();
        frNhapThongTin fr=new frNhapThongTin();
        fr.show();
        DbConnection.getConnect();
        // TODO code application logic here
    }
    
}
