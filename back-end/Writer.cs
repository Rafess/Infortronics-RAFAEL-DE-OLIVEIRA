using System;
using System.IO;
using System.Threading.Tasks;

public class WriteAllText
{
    public static void Writer()
    {
        string path = @"C:\Users\rafin\OneDrive\Documentos\Programação\Projetos\Tste-Pratico-Infortronics\Infortronics -RAFAEL DE OLIVEIRA\test.txt";

        using(StreamWriter sw = File.CreateText(path))
        {
            sw.WriteLine("Hello");
        };
    }
}