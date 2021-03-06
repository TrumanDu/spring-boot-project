package top.trumandu.module.system.user;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import top.trumandu.module.system.login.domain.LoginUserVO;
import top.trumandu.module.system.user.domain.UserEntity;
import top.trumandu.module.system.user.domain.UserQueryDTO;
import top.trumandu.module.system.user.domain.UserVO;

import java.util.List;

/**
 * @author Truman.P.Du
 * @date 2022/03/30
 * @description
 */
@Mapper
public interface UserDao extends BaseMapper<UserEntity> {
    /**
     * 查询所有未删除用户
     *
     * @return
     */
    List<UserVO> listAllUser();

    /**
     * 查询没有角色的用户列表
     * @return
     */
    List<UserVO> listNoRoleUser();

    /**
     * 分页查询符合条件的未删除用户
     *
     * @param queryDTO
     * @return
     */
    List<UserVO> selectUserList(@Param("queryDTO") UserQueryDTO queryDTO);

    /**
     * 假删除指定用户
     *
     * @param userId
     * @return
     */
    Integer disableUserById(@Param("userId") Long userId);

    /**
     * 根绝用户名和密码查询用户信息
     *
     * @param username
     * @param password
     * @return
     */
    LoginUserVO login(@Param("username") String username, @Param("password") String password);

    /**
     * 根据用户名统计数量
     *
     * @param username
     * @return
     */
    Integer countByUsername(@Param("username") String username);
}
