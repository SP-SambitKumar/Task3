<script>
    function regdno_validation(regdno,mx,my)
        var regdno_len=regdno.value.length;
        {
            if(regdno_len==0)
            {
                alert("regdno should not be empty");
                regdno.focus();
                return false;
            }
        return true;
        }
        function validationform()
        {
            var regdno=document.form.regdno;
            var name=document.form.name;
            var phno=document.form.phno;
            var email=document.form.email;
            var addr=document.form.addr;
            var msex=document.form.msex;
            var fsex=document.form.fsex;
            var course=document.form.course;

            if(regdno_validation(regdno,5,12))
            {
                return true;
            }
            return false;
        }
        </script>

<tr>
<td><label for="Regdno">Regdno</label></td>
<td><input type="text" name="regdno" value=""></td>
</tr>
<tr>
<td><label for="name">Name</label></td>
<td><input type="text" name="name" value=""></td>
</tr>
<tr>
<td><label for="Phone no">Phone no</label></td>
<td><input type="text" name="phno" value=""></td>
</tr>
<tr>
<td><label for="Email">Email</label></td>
<td><input type="text" name="email" value=""></td>
</tr>
<tr>
<td><label for="Gender">Gender</label></td>
<td><input type="radio" name="gen" value="male" id="msex"/>Male
<input type="radio" name="gen" value="female" id="fsex"/>female
</td>
</tr>
<tr>
<td><label for="DOB">DOB</label></td>
<td><input type="date"></td>
</tr>
<tr>
<td><label for="Address">Address</label></td>
<td><textarea name="" id=""></textarea></td>
</tr>

<tr>
<td><label for="Course">Course</label></td>
<td><select name="course">
    <option value="default">Select Course</option>
    <option value="php">PHP</option>
    <option value=".net">.net</option>
    <option value="java">Java</option>
    <option value="oracle">Oracle</option>
</select>
</td>
</tr>
<tr>
<td  colspan="2" align="center"><input type="submit" value="ADD"></td>
</tr>
